---
title: data leakage in machine learning
kind: paste
captured_at: 2026-04-18 14:59
tags: [machine-learning, data-science, ml, leakage, credit-risk, fraud-detection]
source_url: 
status: inbox
---

# data leakage in machine learning

Data Leakage in Machine Learning:

Imagine writing an exam where you had access to the answers beforehand.
You score 95% but in real life, when the same problems appear, you can’t solve them. It is due to data leakage and some machine learning models behave the same way.

Data leakage happens when a model learns from information it would not have at the time of prediction. In lay terms, the model is using future or hidden information to make predictions. The implication is, performance looks perfect in training but collapses in production.

Credit risk example
You are building a model to predict default. Your features include customer income, loan amount, repayment history, and number of missed payments.
All looks reasonable but here’s the problem;
If “missed payments” includes behavior after the loan was approved, then the model is learning from the future; it already knows who defaulted.

Fraud detection example
You are predicting fraudulent transactions and one of your features is “Transaction flagged by investigation team”. That flag is added after fraud is confirmed. Hence, the model is learning from the answer itself. It will perform extremely well in testing, but in real-time detection, that feature does not exist.

Data leakage is dangerous because it creates the illusion of a strong model.

Common types of leakage
~ Target leakage: Features directly or indirectly reveal the outcome.
~ Temporal leakage: Using future data to predict the present. Like using February data to predict January behavior.
~ Train-test leakage: Test data influences training through preprocessing; scaling, encoding, or feature engineering done before splitting data.

How to detect leakage
If performance looks too good, then get suspicious because real-world data is messy and perfect models are rare. One good question to always ask is "Would this feature exist at the exact moment of decision?” If the answer is no, it’s leakage.
To prevent it, think in timelines; at the point of prediction, what does the system actually know? From the answer, only use features available at that moment.
Also important is to split data before preprocessing, use time-based validation and audit every feature carefully. The logic is, if a feature cannot exist in production, it does not belong in the model.

To conclude, in real-world fraud and credit systems; labels are created after events, data pipelines are complex, and features are derived from behavior over time. It’s easy to accidentally include future signals, and once leakage enters your model, everything becomes unreliable.

Image is generated with ChatGPT, repost to your ML communities.
