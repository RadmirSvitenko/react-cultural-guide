import React, { useCallback, useEffect, useState } from "react";
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
  TelegramBox,
} from "./styles";
import {
  Button,
  Grid,
  IconButton,
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import { getPostsList } from "reducers/postsSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { theme } from "theme";
import { Box } from "@mui/system";
import { Telegram } from "@mui/icons-material";
import Loading from "components/Loading/Loading";

const Posts = () => {
  const [arrowIcon, setArrowIcon] = useState(false);
  const [isViewPost, setIsViewPost] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeIconArrow = () => setArrowIcon((show) => !show);
  const togglewViewDetailsPost = () => {
    setIsViewPost((show) => !show);
    handleChangeIconArrow();
  };

  const posts = useSelector((state) => state.posts.postsList);
  const isLoading = useSelector((state) => state.posts.isLoading);
  console.log("posts: ", posts);

  const getPosts = useCallback(async () => {
    await dispatch(getPostsList());
  }, [dispatch]);

  const toDetailsPost = (post) => {
    navigate(`/${post.id}`);
  };

  const toTelegramBot = () => {
    navigate("/1");
  };

  useEffect(() => {
    getPosts();
    console.log("inside");
  }, [getPosts]);

  if (!posts || isLoading) {
    return <Loading />;
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
                  <Rating value={5} />
                  <IconButton>
                    <FavoriteRoundedIcon color="error" />
                  </IconButton>

                  <PostBoxRatingTitle>
                    <IconButton>
                      <RemoveRedEyeIcon
                        fontSize="small"
                        sx={{
                          color: "#fff",
                        }}
                      />
                    </IconButton>
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
                        sx={{ margin: "5px 0px" }}
                        variant="contained"
                        color="success"
                      >
                        Я пойду!
                      </Button>
                      <Button
                        sx={{ margin: "5px 0px" }}
                        variant="contained"
                        color="warning"
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

        <TelegramBox onClick={() => toTelegramBot}>
          <IconButton>
            <Telegram
              fontSize="large"
              sx={{
                color: "#fff",
              }}
            />
          </IconButton>
        </TelegramBox>
      </PostsPageMainConteiner>
    </>
  );
};

export default Posts;
