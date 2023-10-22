from flask import Flask, render_template

app = Flask(__name__, static_folder="/dist/fullstack/assets", template_folder="/dist/fullstack")

@app.route("/")
def hello():
    return render_template('/dist/fullstack/index.html')

print('Starting Flask!')

app.debug=True
app.run(host='0.0.0.0',port=9877)