Rails.application.routes.draw do
  resources :segments
  resources :posts
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
end
