FROM ruby
WORKDIR palatinate
ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install --quiet
ADD . ./
ENTRYPOINT ["bundle", "exec"]
CMD ["rackup", "--host", "0.0.0.0", "-p", "4567"]
