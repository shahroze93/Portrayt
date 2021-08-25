class CreateJoinTablePostsSegments < ActiveRecord::Migration[6.1]
  def change
    create_join_table :posts, :segments do |t|
      # t.index [:post_id, :segment_id]
      # t.index [:segment_id, :post_id]
    end
  end
end
