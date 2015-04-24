require 'test_helper'

class SiteLayoutTest < ActionDispatch::IntegrationTest

  # Get the root path (Home page)
  # Verify that the right page template is rendered
  # Check for the correct links to the Home, mini_goals, About, and Contact pages
  test "layout links" do
    get root_path
    assert_template 'static_pages/home'
    assert_select "a[href=?]", root_path #, count: 2 for the logo also to root
    assert_select "a[href=?]", mini_goals_path
    assert_select "a[href=?]", about_path
    # assert_select "a[href=?]", contact_path
  end
  # bundle exec rake test:integration

end
