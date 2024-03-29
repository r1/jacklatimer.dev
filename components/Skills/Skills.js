import React from "react";
import Grid from "@material-ui/core/Grid";
import { skills } from "./List";

function Skills() {
  return (
    <section id="skills">
      <h3 className="text-2xl font-bold tracking-tight md:text-4xl mb-11">
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
          {skills.map((i) => {
            return (
              <Grid item key={i.item}>
                <div
                  elevation={3}
                  style={{
                    width: "300px",
                    maxHeight: "20rem",
                    padding: "15px",
                    background: "#101110",
                  }}
                >
                  <Grid container direction="row" spacing={2}>
                    <Grid item>
                      <h2 className="text-white">{i.name}</h2>
                      <h3 className="text-gray-500">{i.category}</h3>
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
