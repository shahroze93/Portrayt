Rails.application.routes.draw do
  resources :segments, only: :index
  resources :posts
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  get '/posts/:post_id/segments/:id', to: 'segments#add_to_post'
end
