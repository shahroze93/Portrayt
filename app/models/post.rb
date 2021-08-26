class Post < ApplicationRecord
  has_and_belongs_to_many :segments
  has_many :comments
  belongs_to :user
end
