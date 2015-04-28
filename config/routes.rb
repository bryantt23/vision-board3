Rails.application.routes.draw do

  root             'static_pages#home'

  get 'mini_goals'    => 'static_pages#mini_goals'
  get 'about'   => 'static_pages#about'
  get 'contact' => 'static_pages#contact'
  get 'timer' => 'static_pages#timer'
  get 'resources' => 'static_pages#resources'  

  resources :posts


end
