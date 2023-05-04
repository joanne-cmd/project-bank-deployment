class AddRoleToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :role, :string
  end
end
