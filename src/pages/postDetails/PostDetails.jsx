import {
  PostCommentsBox,
  PostCommentsContainer,
  PostDetailsContainer,
  PostDetailsDescription,
  PostDetailsDescriptionBox,
  PostDetailsFunctionBox,
  PostDetailsInfo,
  PostDetailsInfoBox,
  PostDetailsPaper,
  PostDetailsTime,
  PostDetailsTimeBox,
  PostDetailsTitle,
  PostDetailsTitleBox,
} from "./styles";

import { Button, Grid, Rating, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentPostDetails,
  getCommentPostDetails,
  getMeetingDetails,
  getPostDetails,
} from "reducers/postDetailsSlice";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getFavoriteList, postFavoriteList } from "reducers/favoriteSlice";

export default function CheckboxListSecondary() {
  const [commentValue, setCommentValue] = useState();
  const [currentTime, setCurrentTime] = useState();
  const post = useSelector((state) => state.post.post);
  const meeting = useSelector((state) => state.post.meeting);
  const user = useSelector((state) => state.auth.user);
  const comment = useSelector((state) => state.post.comment);
  console.log("comment: ", comment);

  console.log("post: ", post);
  console.log("meeting: ", meeting);
  console.log("user: ", user);

  const getNowTimePhone = () => {
    setInterval(() => {
      let date = new Date();
      let time = date.toLocaleTimeString();
      console.log("time: ", time);

      setCurrentTime(time);
    }, 1000);
  };

  const dispatch = useDispatch();

  const { id } = useParams();

  const getPost = useCallback(async () => {
    dispatch(getPostDetails(`${id}`));
    getMeetingToEvent();
  }, []);

  const handleChangeSubmitComment = (e, id, value) => {
    console.log("value: ", value);
    console.log("id: ", id);
    console.log("e: ", e);
    e.preventDefault();
    dispatch(addCommentPostDetails({ id: id, value: value }));
    handleGetComments(id, value);
  };

  const handleGetComments = (id) => {
    dispatch(getCommentPostDetails(id));
  };

  const getMeetingToEvent = useCallback(async () => {
    await dispatch(getMeetingDetails());
  }, []);

  const handleAddFavoriteEvent = async (post) => {
    dispatch(
      postFavoriteList({
        events: post,
      })
    );
    await dispatch(getFavoriteList());
  };

  const handleChangeComment = (e) => {
    setCommentValue(e.target.value);
  };

  useEffect(() => {
    getPost();
  }, [getPost]);

  useEffect(() => {
    handleGetComments();
  }, []);

  return (
    <PostDetailsContainer>
      <Box width={"100%"} display={"flex"}>
        <PostDetailsPaper elevation={20}>
          <PostDetailsTitleBox>
            <PostDetailsTitle>Название:{post.title}</PostDetailsTitle>
            <PostDetailsTitle>{currentTime}</PostDetailsTitle>
          </PostDetailsTitleBox>

          <PostDetailsDescriptionBox>
            <PostDetailsDescription>{post.description}</PostDetailsDescription>
          </PostDetailsDescriptionBox>

          <PostDetailsTimeBox>
            <PostDetailsTime>{post.date}</PostDetailsTime>
            <PostDetailsTime>{post.time_start}</PostDetailsTime>
            <PostDetailsTime>{post.time_end}</PostDetailsTime>
          </PostDetailsTimeBox>

          <Grid container sx={{ display: "flex", flexDirection: "column" }}>
            <Grid item xs={4} sx={{ display: "flex", flexDirection: "column" }}>
              <PostDetailsInfoBox>
                <PostDetailsInfo>
                  Категория: {post.category__title}
                </PostDetailsInfo>
                <PostDetailsInfo>
                  Где пройдёт: {post.geolocation_name}
                </PostDetailsInfo>
              </PostDetailsInfoBox>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", flexDirection: "column" }}>
              <PostDetailsInfoBox>
                <PostDetailsInfo>Значимость: {post.priority}</PostDetailsInfo>
                <PostDetailsInfo>Цена: {post.price} сом</PostDetailsInfo>
              </PostDetailsInfoBox>
            </Grid>
          </Grid>

          <PostDetailsFunctionBox>
            <Button
              sx={{ background: "#5691c8" }}
              variant="contained"
              onClick={() => handleAddFavoriteEvent(post)}
            >
              Добавить в избранное
            </Button>
          </PostDetailsFunctionBox>
        </PostDetailsPaper>
        <PostCommentsContainer>
          <PostCommentsBox>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
              onSubmit={(e) =>
                handleChangeSubmitComment(e, post.id, commentValue)
              }
            >
              <Box
                sx={{
                  maxHeight: "100px",
                  marginBottom: "100px",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  flexWrap: "wrap",
                  overflowY: "scroll",
                }}
              >
                {comment.map(({ title }) => (
                  <p>{title}</p>
                ))}
              </Box>
              <TextField
                onChange={handleChangeComment}
                multiline="true"
                placeholder="Введите ваше мнение сюда"
                sx={{ mb: 1, minWidth: "300px", minHeight: "300px" }}
              />

              <Button type="submit" color="primary" variant="contained">
                Отправить
              </Button>
            </form>
          </PostCommentsBox>
        </PostCommentsContainer>
      </Box>
    </PostDetailsContainer>
  );
}
