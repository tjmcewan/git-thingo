require 'sinatra'
#require 'debugger'
set :views, settings.root + '/../web'

get '/repo' do
  content_type :json
  output =
  '''
  {"repo_name": {
      "app": {
        "size": 32,
        "children": {
          "models": {
            "employee.rb": {
              "size": 24
            },
            "organisation": {
              "size": 16
            }
          },
          "controllers": {

          },
          "views": {

          }
        }
      },
      "test": {
        "employee_test.rb": {
          "size": 32
        },
        "organisation_test.rb": {
          "size": 64
        }
      }
    }
  }
  '''
  return output
end

get '/' do
  erb :index
end

# output.split("\n").map{|i| i.split("\t")}

# all shas: `git log --pretty=format:'%h'`
  # output = `du -a | grep -v .git`
  # debugger
  # puts ""
