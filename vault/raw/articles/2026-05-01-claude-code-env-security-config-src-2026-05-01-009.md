# Claude Code .env Security Config Advisory

Captured from a user-supplied advisory post on 2026-05-01.

---

Source type:

- User-supplied post or thread-like advisory about Claude Code security configuration.

Core framing captured from the supplied text:

- The post argues that Claude Code can access secrets from `.env`-style files unless explicit deny rules are configured in `settings.json`.
- It claims `CLAUDE.md` rules are advisory rather than a reliable enforcement boundary for secret protection.
- It distinguishes three leak paths:
  - direct file reads of `.env` and similar files
  - runtime output capture where commands print secrets into logs
  - grep or search output that surfaces credentials from config files
- It recommends deny rules in `~/.claude/settings.json` for `.env`, key material, cloud credentials, and other secret-bearing paths.
- It also recommends:
  - using dummy-valued `.env.test` files for tests
  - adding a pre-commit hook to scan for common secret patterns
  - container isolation for stronger separation in sensitive environments

Example deny-rule configuration included in the supplied post:

```json
{
  "permissions": {
    "deny": [
      "Read(**/.env*)",
      "Read(**/.dev.vars*)",
      "Read(**/*.pem)",
      "Read(**/*.key)",
      "Read(**/secrets/**)",
      "Read(**/credentials/**)",
      "Read(**/.aws/**)",
      "Read(**/.ssh/**)",
      "Read(**/config/database.yml)",
      "Read(**/config/credentials.json)",
      "Read(**/.npmrc)",
      "Read(**/.pypirc)",
      "Write(**/.env*)",
      "Write(**/secrets/**)",
      "Write(**/.ssh/**)"
    ]
  }
}
```

Example pre-commit hook content included in the supplied post:

```bash
#!/bin/bash
# .git/hooks/pre-commit — blocks commits containing secrets

PATTERNS=(
  'sk-ant-'
  'sk-live-'
  'sk_live_'
  'ghp_'
  'gho_'
  'AKIA'
  'xox[bpors]-'
  'SG\.'
  'eyJ'
  'BEGIN.*PRIVATE KEY'
)

BLOCKED_FILES=('.env' 'credentials.json' 'id_rsa' '*.pem' '*.key')

for pattern in "${PATTERNS[@]}"; do
  if git diff --cached --diff-filter=ACM | grep -qE "$pattern"; then
    echo "BLOCKED: Found potential secret matching '$pattern'"
    echo "Remove the secret and try again."
    exit 1
  fi
done

for file in "${BLOCKED_FILES[@]}"; do
  if git diff --cached --name-only | grep -q "$file"; then
    echo "BLOCKED: Attempted to commit sensitive file: $file"
    exit 1
  fi
done

echo "Pre-commit security check passed."
exit 0
```

Additional supplied guidance:

- The post recommends storing production credentials in a vault rather than plaintext project files.
- It recommends keeping `.env` in `.gitignore`.
- It recommends placing sensitive environment files outside the project directory when practical.
- It presents container isolation as a stronger option by mounting an empty file in place of `.env`.

Important evidentiary note:

- This raw note preserves what the supplied post claims.
- The post references a GitHub issue and Anthropic behavior, but no direct issue link, official documentation link, or reproducible evidence was included in the supplied text.
- Because of that, any downstream synthesis should treat the strongest behavioral claims as unverified claims from the post, not as confirmed platform facts.
