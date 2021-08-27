class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.text :img_url
      t.text :link_url
      t.text :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
