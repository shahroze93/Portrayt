class Post < ApplicationRecord
  has_and_belongs_to_many :segments
  belongs_to :user
end
