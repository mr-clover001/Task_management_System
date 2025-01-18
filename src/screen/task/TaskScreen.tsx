import { Box, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import Styles from "./TaskScreen.module.css";
import NewTaskModal from "./NewTaskModal/NewTaskModal";
import TaskCard from "./TaskCard/TaskCard";
import useUserStore from "../../store/taskStore";
import NotFoundIcon from "../../assests/NotFoundTask.svg";
const TaskScreen = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const { task: tasks, setTask } = useUserStore();
  const [searchQuery, setSearchQuery] = useState("");
  const filteredTasks = tasks.filter((task) => {
    if (selectedOption === 1) return task.result; // Completed tasks
    if (selectedOption === 2) return !task.result; // Incomplete tasks
    return true; // All tasks
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  // Apply search query filtering
  const displayedTasks = filteredTasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Box height={"90%"}>
        <Stack className={Styles.dashboard_section_head}>
          <Stack className={Styles.head_title}>Tasks</Stack>
          <Stack
            className={Styles.task_perform}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column-reverse !important",
                md: "row !important",
              },
            }}
          >
            <Stack
              width={"70%"}
              position={"relative"}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <span className={Styles.search_icon}>
                {" "}
                <SearchIcon />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={Styles.search_input}
                placeholder="Search note by title..."
              />
            </Stack>
            <NewTaskModal />
          </Stack>
        </Stack>
        <Stack className={Styles.search_layout_mobile}>
          <Stack
            width={"90%"}
            position={"relative"}
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <span className={Styles.search_icon}>
              {" "}
              <SearchIcon />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={Styles.search_input}
              placeholder="Search note by title..."
            />
          </Stack>
        </Stack>

        <Stack className={Styles.active_user_layout}>
          <Stack
            className={Styles.active_user_btn}
            onClick={() => {
              setSelectedOption(0);
            }}
            sx={{
              background: selectedOption !== 0 ? "#f4878790" : "#f48787",
            }}
          >
            All ( {tasks.length} )
          </Stack>

          <Stack
            className={Styles.active_user_btn}
            onClick={() => {
              setSelectedOption(1);
            }}
            sx={{
              background: selectedOption !== 1 ? "#77c74cae" : "#77c74c",
            }}
          >
            Complete ( {tasks.filter((task) => task.result).length} )
          </Stack>

          <Stack
            className={Styles.active_user_btn}
            onClick={() => {
              setSelectedOption(2);
            }}
            sx={{
              background: selectedOption !== 2 ? "#FFCF81" : "#f0bb65",
            }}
          >
            Incompleted ( {tasks.filter((task) => !task.result).length} )
          </Stack>
        </Stack>

        {/* Section Cards Layouts */}
        <Box className={Styles.tasks_layout}>
          {displayedTasks.length > 0 ? (
            <>
              <Stack className={Styles.title_card}>
                {selectedOption == 0
                  ? "All Task"
                  : selectedOption == 1
                  ? "Completed Task"
                  : "Incomplete Task"}
              </Stack>
              <TaskCard tasks={displayedTasks} />
            </>
          ) : (
            <Box className={Styles.deafult_screen}>
              <Stack className={Styles.deafult_screen_img}>
                <img src={NotFoundIcon} />
              </Stack>
              <Stack
                className={Styles.deafult_screen_text}
                alignItems={"center"}
              >
                No Task Available
              </Stack>
              <Stack
                width={"30%"}
                alignItems={"center"}
                marginTop={"10px"}
                paddingLeft={"2%"}
              >
                <NewTaskModal />
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default TaskScreen;
