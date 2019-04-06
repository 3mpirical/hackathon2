class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :name
      t.integer :duration
      t.string :genre
      t.string :description
      t.string :trailer

      t.timestamps
    end
  end
end
