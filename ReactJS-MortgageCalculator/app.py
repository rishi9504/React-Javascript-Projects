from flask import Flask, request
from flask_cors import CORS, cross_origin
app = Flask(__name__, static_folder='build', static_url_path='/')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/submit', methods=['POST'])
@cross_origin()
def submit_form():
    form_data = request.get_json()
    # Process the form data, for example, save it to a database
    print(form_data)
    return 'OK', 200


@app.route('/')
def serve():
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run(debug=True)
