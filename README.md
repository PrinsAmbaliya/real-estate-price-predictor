# 🏠 real-estate-price-predictor

A **Machine Learning + Flask Web App** to predict house prices in Bangalore based on location, square footage, number of bedrooms (BHK), and bathrooms.

---

## 📌 Project Overview
- **Dataset**: Bengaluru House Price Dataset (`bengaluru_house_prices.csv`)
- **Model**: Linear Regression (trained with data preprocessing and feature engineering)
- **Backend**: Python Flask API (`server.py`, `util.py`)
- **Frontend**: HTML, CSS, JavaScript (`app.html`, `app.css`, `app.js`)
- **Deployment Ready**: Can be hosted on Heroku / Render / AWS

---

## 🗂 Project Structure
├── artifacts/
│   ├── banglore_home_prices_model.pickle   # Trained ML model
│   ├── columns.json                        # Model features
│
├── data/
│   ├── bengaluru_house_prices.csv          # Raw dataset
│   ├── bhp.csv                             # Cleaned dataset
│
├── notebooks/
│   └── banglore_home_prices_final.ipynb    # Jupyter notebook for EDA & training
│
├── app.html                                # Frontend UI
├── app.css                                 # Styling
├── app.js                                  # Client-side logic
├── server.py                               # Flask server
├── util.py                                 # Helper functions
├── requirements.txt                        # Dependencies
└── README.md                               # Project Documentation



---

## ⚙️ How It Works
1. User enters:
   - Area (sqft)
   - BHK
   - Bathrooms
   - Location
2. The request is sent to Flask backend (`/predict_home_price`).
3. The trained ML model predicts the price.
4. Result is displayed on the webpage in **Lakhs (₹)**.

---

## 🚀 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bangalore-house-price-prediction.git
   cd bangalore-house-price-prediction
