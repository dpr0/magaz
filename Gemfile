# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.1'

gem 'bootsnap'
gem 'pg'
gem 'rails'
gem 'slim-rails'
gem 'uglifier'
gem 'webpacker'
gem 'dotenv-rails'
gem 'puma'
gem 'whenever'

gem 'spree', '~> 4.2'
gem 'spree_auth_devise', '~> 4.3'
gem 'spree_gateway', '~> 3.9'
gem 'spree_i18n', '~> 5.0'
gem 'sassc', github: 'sass/sassc-ruby', branch: 'master'

group :development do
  gem 'byebug'
  gem 'rubocop'
  gem 'capistrano',            require: false
  gem 'capistrano-bundler',    require: false
  gem 'capistrano-nvm',        require: false
  gem 'capistrano-rails',      require: false
  gem 'capistrano-rbenv',      require: false
  gem 'capistrano-yarn',       require: false
  gem 'capistrano3-puma', '4.0.0', require: false
  gem 'ed25519'
  gem 'bcrypt_pbkdf'
  gem 'web-console'
  gem 'listen'
  gem 'spring'
end
