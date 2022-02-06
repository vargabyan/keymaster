import React from "react";
import keyExplodedView from "./image/key-exploded-view.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


function DescriptionForKey(){

  return (
    <Box 
      sx={{
        maxWidth: "1200px",
        position: "relative",
        paddingTop: "90px",
        paddingBottom: "90px",
        margin: "auto",
      }}
    >
      <Card sx={{ display: "flex", borderRadius: "5px", }}>
        <Grid container direction="row">
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image={keyExplodedView}
              alt="key exploded view"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column"}}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Объяснение ключей транспондера
                </Typography>
                <Typography variant="body2" color="#000000cc" >
                  В 1990-е годы кража автомобилей в Австралии стала одним из основных вопрос для полиции, страховщиков и автовладельцев. Воры могли украсть автомобиль за считанные минуты.
                  <br />
                  Требовался внедрение транспондерных ключей производителями автомобилей
                   кодированные чипы для запуска автомобиля. Этот процесс начался в конце
                   1990-х годов и все автомобили, проданные в Австралии с 2000 года, имеют
                   транспондерный ключ для безопасности.
                  <br />
                  <strong>
                    Сегодняшний автомобильный ключ состоит из трех отдельных функций, работающих вместе:
                  </strong>
                </Typography>
                  <ul style={{all: "revert", listStyleType: "decimal"}}>
                    <li>
                      <Typography variant="body2" color="#000000cc" >
                        <strong>Лезвия ключа</strong>
                        <br/>
                        Современные лезвия ключей требуют специальных точных инструментов для
                        обеспечить идеальный разрез, необходимый для современных систем зажигания.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" color="#000000cc" >
                        <strong>Чип-транспондер</strong>
                        <br/>
                          Чип-транспондер, встроенный в ключ, позволяет
                          автомобиль для запуска и может быть продублирован двумя способами: клонирование или
                          Запрограммированный. Клонирование является наиболее распространенной формой транспондера.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" color="#000000cc" >
                        <strong>Пульта дистанционного управления</strong>
                        <br/>
                          Процесс центрального замка состоит из нового пульта дистанционного управления.
                          введен в автомобили BCM (модуль управления кузовом или «бортовой компьютер») и может
                          либо вручную, либо с помощью диагностики. 
                      </Typography>
                    </li>
                  </ul>
                  <br />
                <Typography variant="body2" color="#000000cc" >
                  Год, Марка и модель вашего автомобиля определяют тип
                  чип транспондера, который содержится в вашем ключе, поэтому полезно, если вы можете
                  держите эту информацию под рукой вместе с ключом, когда придете к мастеру за дубликатом.
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

function InformationForKey() {
  return (
    <Box sx={{position: "relative",}}>
      <div 
        style={{
          backgroundColor: "rgb(152, 34, 9)",
          width: "40%",
          height: "100%",
          position: "absolute",
          paddingTop: "90px",
          paddingBottom: "90px",
          transform: "skewX(-13deg)",
        }}
      />
      <div 
        style={{
          backgroundColor: "rgb(152, 34, 9)",
          width: "30%",
          height: "100%",
          position: "absolute",
          paddingTop: "90px",
          paddingBottom: "90px",
        }}
      />
      <DescriptionForKey />
    </Box>
  );
}

export default InformationForKey;
