Rails.application.routes.draw do
  resources :comments
  resources :segments
  resources :posts
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  put '/segments/:segmentId/posts/:id',
        to: 'segments#add_to_post'
end
