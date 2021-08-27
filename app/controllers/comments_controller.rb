class CommentsController < ApplicationController
  # before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :destroy]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments, include: [:user, :posts]
  end

  # GET /comments/1
  def show
    render json: @comment, include: [:user, :post]
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  def comment_to_post
    @post = Post.find(params[:id])
    @comment = Comment.find(params[:commentId])

    @post.comments << @comment
    render json: @post
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

  #   # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :user_id)
    end
end
