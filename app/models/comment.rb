class Comment
  include Mongoid::Document

  field :user_email, type: String
  field :body, type: String

  belongs_to :user
  belongs_to :album
end
