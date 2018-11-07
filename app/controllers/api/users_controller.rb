class Api::UsersController < ApplicationController
  before_action :require_current_user!, except: [:create]

  def create
    @user = User.new(user_params)
    
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username,:password)
  end
end
