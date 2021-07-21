# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.1'

gem 'bootsnap', require: false
gem 'dotenv-rails'
gem 'jbuilder'
gem 'pg'
gem 'puma'
gem 'rails'
gem 'sassc', github: 'sass/sassc-ruby', branch: 'master'
gem 'sass-rails'
gem 'slim-rails'
gem 'spree', '~> 4.2'
gem 'spree_auth_devise', '~> 4.3'
gem 'spree_gateway', '~> 3.9'
gem 'spree_i18n', '~> 5.0'
# gem 'sqlite3'
gem 'turbolinks'
gem 'webpacker'

group :development do
  gem 'byebug'
  gem 'capistrano',                require: false
  gem 'capistrano3-puma', '4.0.0', require: false
  gem 'capistrano-bundler',        require: false
  gem 'capistrano-nvm',            require: false
  gem 'capistrano-rails',          require: false
  gem 'capistrano-rbenv',          require: false
  gem 'capistrano-yarn',           require: false
  gem 'ed25519'
  gem 'listen'
  gem 'rubocop'
  gem 'spring'
  gem 'web-console'
end

group :test do
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end
