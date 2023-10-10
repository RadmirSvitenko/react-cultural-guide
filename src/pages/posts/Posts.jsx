import React, { useCallback, useEffect, useState } from "react";
import {
  PostBoxButtonBox,
  PostBoxContent,
  PostBoxContentBox,
  PostBoxFunctionBox,
  PostBoxRatingBox,
  PostBoxRatingTitle,
  PostBoxTitle,
  PostBoxTitleBox,
  PostCollapseContainer,
  PostCollapseContentBox,
  PostCollapseTitle,
  PostsPageAllPostsBox,
  PostsPageMainConteiner,
  PostsPagePostBox,
} from "./styles";
import { Button, ListItem, ListItemText } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import { getPostsList } from "reducers/postsSlice";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const [arrowIcon, setArrowIcon] = useState(false);
  const [isViewPost, setIsViewPost] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeIconFavorite = () => setFavoriteIcon((show) => !show);
  const handleChangeIconArrow = () => setArrowIcon((show) => !show);
  const togglewViewDetailsPost = () => {
    setIsViewPost((show) => !show);
    handleChangeIconArrow();
  };

  const posts = useSelector((state) => state.posts.postsList);
  const isLoading = useSelector((state) => state.posts.isLoading);
  console.log("posts: ", posts);

  const getPosts = useCallback(async () => {
    dispatch(getPostsList());
  }, []);

  const toDetailsPost = (post) => {
    navigate(`/posts/${post.id}`);
  };

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (isLoading) {
    return <CircularProgress size={"large"} color="secondary" />;
  }

  if (isLoading || !posts) {
    <CircularProgress />;
  }

  return (
    <>
      <PostsPageMainConteiner>
        <PostsPageAllPostsBox>
          {posts?.map((post) => (
            <PostsPagePostBox>
              <PostBoxTitleBox>
                <PostBoxTitle>{post.title}</PostBoxTitle>
                <PostBoxTitle>{post.date}</PostBoxTitle>
              </PostBoxTitleBox>

              <PostBoxContentBox>
                <PostBoxContent>
                  <ListItem>
                    <ListItemText>{post.description}</ListItemText>
                  </ListItem>
                </PostBoxContent>
              </PostBoxContentBox>

              <PostBoxFunctionBox>
                <PostBoxRatingBox>
                  <PostBoxRatingTitle>
                    <RemoveRedEyeIcon />
                    {post.views}
                  </PostBoxRatingTitle>
                </PostBoxRatingBox>
                <PostBoxButtonBox>
                  <PostCollapseContainer>
                    <PostCollapseContentBox>
                      <PostCollapseTitle>
                        Начало: {post.time_start}
                      </PostCollapseTitle>
                      <PostCollapseTitle>
                        Конец: {post.time_end}
                      </PostCollapseTitle>
                    </PostCollapseContentBox>

                    <PostCollapseContentBox>
                      <Button
                        sx={{
                          margin: "5px 0px",
                          background: "#457fca",
                          color: "white",
                        }}
                        variant="contained"
                        onClick={() => toDetailsPost(post)}
                      >
                        Подробнее
                      </Button>
                    </PostCollapseContentBox>
                  </PostCollapseContainer>
                </PostBoxButtonBox>
              </PostBoxFunctionBox>
            </PostsPagePostBox>
          ))}
        </PostsPageAllPostsBox>
      </PostsPageMainConteiner>
    </>
  );
};

export default Posts;
