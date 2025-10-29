# real-estate-price-predictor

A **Machine Learning + Flask Web App** to predict house prices in Bangalore based on location, square footage, number of bedrooms (BHK), and bathrooms.

---

## Project Overview
- **Dataset**: Bengaluru House Price Dataset (`bengaluru_house_prices.csv`)
- **Model**: Linear Regression (trained with data preprocessing and feature engineering)
- **Backend**: Python Flask API (`server.py`, `util.py`)
- **Frontend**: HTML, CSS, JavaScript (`app.html`, `app.css`, `app.js`)
- **Deployment Ready**: Can be hosted on Heroku / Render / AWS

---

## Project Structure

```text
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
```   
---

## How It Works
1. User enters:
   - Area (sqft)
   - BHK
   - Bathrooms
   - Location
2. The request is sent to Flask backend (`/predict_home_price`).
3. The trained ML model predicts the price.
4. Result is displayed on the webpage in **Lakhs (₹)**.

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bangalore-house-price-prediction.git
   cd bangalore-house-price-prediction
2. Create a virtual environment & activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate    # Linux/Mac
   venv\Scripts\activate       # Windows
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
4. Run the Flask server:
   ```bash
   python server.py
5. Open app.html in your browser → enter details → get predictions

---

## Model Training
- Preprocessing: Removed outliers, handled missing values, averaged total_sqft ranges
- Feature Engineering: One-hot encoding for 241 Bangalore locations
- Model: Linear Regression (or XGBoost with 87.41% accuracy in testing)
- Saved: As banglore_home_prices_model.pickle

---

## Screenshots

<img width="1920" height="1080" alt="Screenshot (210)" src="https://github.com/user-attachments/assets/4d69a1ad-2b7f-46fd-8796-fc61c51ec8d0" />

---

## Future Improvements
- Integrate advanced ML models (e.g., Random Forest, XGBoost, CatBoost)
- Deploy live on Heroku/Render
- Expand dataset to include other Indian cities
- Enhance UI/UX with visualizations

---

## Author
Prins Ambaliya

GitHub: PrinsAmbaliya

LinkedIn: https://www.linkedin.com/in/prins-ambaliya-bb7546367 
