# Assets pipeline workshop

The aim of this workshop is to better understand how build tools like Webpack and the Rails assets pipeline work.

We'll work in a series of 25 minute pomodoros. Feel free to pair up or work alone.

## The tasks

Inside the `app/assets` directory is a collection of templates, CSS and JS files. Write an application (language of your choice) that will process these assets and output to `app/public`, where they can be picked up by the Sinatra server running in `app.rb`.

Try not to use Sinatra server to do anything other than serve the HTML that your asset pipeline has outputted to `app/public`.

The processing should include the following:

### Convert templates to HTML

They are written in ERB but you are welcome to rewrite them to use a different engine. Data to be inserted into the templates are stored in the `app/data` directory.

### Concatenate, transpile and minify CSS and JS

You'll need to update the import paths in the templates. Bonus points for code-splitting.

### Fingerprint assets

Hash the assets so that you can tell if they've changed and need rebuilt.

#### TODOs

Manifest files
Chaining
Configurability
