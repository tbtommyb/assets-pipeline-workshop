require 'sinatra/base'

class App < Sinatra::Base
  get '/' do
    html :index
  end

  get '/people' do
    html :people
  end

  get '/posts' do
    html :posts
  end
end

def html(view)
  File.read(File.join('public', "#{view.to_s}.html"))
end
