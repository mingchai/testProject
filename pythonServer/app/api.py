from flask import Flask, jsonify, make_response, json
import requests

app = Flask(__name__)
app.config["DEBUG"] = True

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

@app.route('/tone', methods=['GET'])
def get_tone():
  resp = requests.get('http://express_server:9000/user')
  tone = resp.json()["tone"]
  if resp.json():
    return jsonify({'tone' : tone})
  if not resp.json:
    abort(502)

app.run(host='0.0.0.0', port=9002)