Rails.application.routes.draw do

  root             'static_pages#home'
  get 'mini_goals'    => 'static_pages#mini_goals'
  get 'about'   => 'static_pages#about'
  get 'contact' => 'static_pages#contact'

  # get 'static_pages/about'
  #
  # get 'static_pages/home'
  #
  # get 'static_pages/mini_goals'
  #
  # get  'static_pages/contact'
  #
  # root 'static_pages#home'

end
