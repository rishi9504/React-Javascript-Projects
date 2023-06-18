from flask import Flask, request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/submit', methods=['POST'])
def submit_form():
    # Get the form data from the request
    form_data = request.get_json()

    # Process the form data, for example, save it to a database
    # You can add your own code here to handle the form submission

    return 'OK', 200

if __name__ == '__main__':
    app.run(debug=True)
