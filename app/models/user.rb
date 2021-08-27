class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, :presence => true,
  :confirmation => true,
  :length => {:within => 6..40},
  :on => :create
  validates :password, :confirmation => true,
  :length => {:within => 6..40},
  :allow_blank => true,
  :on => :update
end
