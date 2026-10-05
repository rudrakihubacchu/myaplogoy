import os
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Ensure the static folder exists to store the video
os.makedirs('static', exist_ok=True)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'video' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['video']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
        
    # Save the file to the static folder so anyone visiting the site can see it
    filepath = os.path.join('static', 'apology_video.mp4')
    file.save(filepath)
    
    return jsonify({'message': 'Success', 'url': '/static/apology_video.mp4'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
