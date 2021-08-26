class Comment < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :posts
end
