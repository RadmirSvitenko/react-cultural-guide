import React, { useEffect, useState } from "react";
import {
  PostBoxButtonBox,
  PostBoxContent,
  PostBoxContentBox,
  PostBoxContentList,
  PostBoxContentListItem,
  PostBoxFunctionBox,
  PostBoxFunctionButton,
  PostBoxRatingBox,
  PostBoxRatingTitle,
  PostBoxTitle,
  PostBoxTitleBox,
  PostCollapseContainer,
  PostCollapseContentBox,
  PostCollapseTitle,
  PostsPageAllPostsBox,
  PostsPageFilterContainer,
  PostsPageMainConteiner,
  PostsPagePostBox,
} from "./styles";
import {
  Button,
  Collapse,
  IconButton,
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import { getPostsList } from "reducers/postsSlice";
import { Box } from "@mui/system";

const Posts = () => {
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const [arrowIcon, setArrowIcon] = useState(false);
  const [isViewPost, setIsViewPost] = useState(false);

  const dispatch = useDispatch();

  const handleChangeIconFavorite = () => setFavoriteIcon((show) => !show);
  const handleChangeIconArrow = () => setArrowIcon((show) => !show);
  const togglewViewDetailsPost = () => {
    setIsViewPost((show) => !show);
    handleChangeIconArrow();
  };

  const posts = useSelector((state) => state.posts.postsList);
  console.log("posts: ", posts);

  const getPosts = async () => {
    await dispatch(getPostsList());
  };

  useEffect(() => {
    getPosts();
  }, []);

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
                  <Rating value={5} />
                  <IconButton onClick={handleChangeIconFavorite}>
                    {favoriteIcon ? (
                      <FavoriteRoundedIcon color="warning" />
                    ) : (
                      <FavoriteBorderRoundedIcon color="warning" />
                    )}
                  </IconButton>

                  <PostBoxRatingTitle>
                    <IconButton>
                      <RemoveRedEyeIcon fontSize="small" />
                    </IconButton>
                    {post.views}
                  </PostBoxRatingTitle>
                </PostBoxRatingBox>
                <PostBoxButtonBox>
                  <IconButton onClick={togglewViewDetailsPost}>
                    {arrowIcon ? (
                      <KeyboardArrowUpRoundedIcon
                        fontSize="large"
                        sx={{
                          color: "#000",
                        }}
                      />
                    ) : (
                      <KeyboardArrowDownRoundedIcon
                        fontSize="large"
                        sx={{
                          color: "#000",
                        }}
                      />
                    )}
                  </IconButton>
                </PostBoxButtonBox>
              </PostBoxFunctionBox>

              <Collapse timeout={1000} in={isViewPost}>
                {posts?.map((post) => (
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
                      <Button variant="contained" color="success">
                        Я пойду!
                      </Button>
                      <Button variant="contained" color="warning">
                        Подробнее
                      </Button>
                    </PostCollapseContentBox>
                  </PostCollapseContainer>
                ))}
              </Collapse>
            </PostsPagePostBox>
          ))}
        </PostsPageAllPostsBox>
      </PostsPageMainConteiner>
    </>
  );
};

export default Posts;
