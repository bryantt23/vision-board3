require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get about" do
    get :about
    assert_response :success
    assert_select "title", "About | Bryant's Webpage"
  end

  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "Bryant's Webpage"
    # assert_select "title", "Home | Bryant's Webpage"
  end

  test "should get mini_goals" do
    get :mini_goals
    assert_response :success
    assert_select "title", "Mini Goals | Bryant's Webpage"
  end

  test "should get contact" do
    get :contact
    assert_response :success
    assert_select "title", "Contact | Bryant's Webpage"
  end

  test "should get timer" do
    get :timer
    assert_response :success
    assert_select "title", "Timer | Bryant's Webpage"
  end


end
