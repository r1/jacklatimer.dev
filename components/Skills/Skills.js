import React from "react";
import Grid from "@material-ui/core/Grid";
import { skills } from "./List";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

// Styles override
const useStyles = makeStyles({
  root: {
    color: "white",
  },
});

// Sections with my skills displayed
function Skills() {
  const classes = useStyles();

  return (
    <section id="skills">
      <h3 className="text-2xl font-bold tracking-tight text-black md:text-4xl mb-11 dark:text-white">
        Technologies & Skills
      </h3>
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        container
        spacing={3}
      >
        <Grid container item justify="center" alignItems="center" spacing={3}>
          {skills.map((s, i) => {
            return (
              <Grid item key={s.item}>
                <div
                  elevation={3}
                  style={{
                    width: "300px",
                    maxHeight: "20rem",
                    padding: "15px",
                    background: "#111111",
                  }}
                >
                  <Grid container direction="row" spacing={2}>
                    <Grid item>
                        <h2 className="text-white">{s.name}</h2>
                        <h3 style={{ color: "#999" }}>{s.category}</h3>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <br />
      <br />
    </section>
  );
}

export default Skills;
