import React from "react";
import Grid from "@material-ui/core/Grid";
import { skills } from "./SkillsList";

function Skills() {
  return (
    <section id="skills">
      <h3 className="text-3xl font-bold tracking-tight md:text-4xl sm:mb-11 mb-6 p-4 md:p-4 lg:p-0">
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
              <Grid item>
                <div
                  style={{
                    width: "300px",
                    maxHeight: "20rem",
                    padding: "15px",
                    background: "#101110",
                  }}
                >
                  <Grid container direction="row" spacing={2}>
                    <Grid item>
                      <h2 className="text-gray-200 font-semibold">{i.name}</h2>
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