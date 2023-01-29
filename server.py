from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<link rel='stylesheet' href='static/style.css'> <p>Hello, World!</p>"

@app.route('/hi', methods=['GET'])
def hello_world1():
  user_name = request.args.get("userName", "unknown")
  return render_template('main.html', user=user_name) 

@app.route('/devito', methods=['GET'])
def Danny_Devito():
  return render_template('index.html') 