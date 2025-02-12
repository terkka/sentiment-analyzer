# Sentiment Analysis Project

This project demonstrates a sentiment analysis pipeline using a fine-tuned Hugging Face transformer model and a FastAPI-based API.

## Project Structure

- `notebook.ipynb`: Jupyter Notebook containing the data preparation, model fine-tuning, and API code.
- `requirements.txt`: List of Python dependencies.
- `src`: Directory for the React app code (if applicable).

## Installation

1. **Clone the repository:**
  bash git clone [redacted link] cd your-repo
2. **Create a virtual environment (recommended):**
  bash python3 -m venv .venv source .venv/bin/activate
3. **Install dependencies:**

  install the dependencies for react app with 

npm install

  ## Running the Notebook

1. **Open the `notebook.ipynb` file in Jupyter Notebook or Google Colab.**
2. **Run all the cells in the notebook to download the dataset, fine-tune the model, and start the FastAPI API.**
3. **The notebook will output the API endpoint URL (usually a ngrok URL if running in Colab).**

## Running the API Locally

1. **Make sure you have the virtual environment activated.**
2. **Run the FastAPI app using `uvicorn`:**

run the notebook last piece of code to run the API

The API endpoint will be printed in the output

it will be something like "http://xxxxxx.ngrok-free.app"

The url has to be pasted into the react app highlighted in the code in the
SentimentAnalyzer.js file

After that run the react app with "npm run"

Link to the demo of the web app: https://youtu.be/rXod8axJcsE