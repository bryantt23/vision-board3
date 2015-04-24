require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get mini-goals" do
    get :mini-goals
    assert_response :success
  end

end
