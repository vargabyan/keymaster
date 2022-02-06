import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import toyotaKey from "./image/Toyota-key.jpg";
import motorbikeKey from "./image/Motorbike-key-.jpg";
import misterMinit0634Scaled from "./image/Mister_Minit0634-scaled.jpg";
import proximityKeyScaled from "./image/Proximity-Key-scaled.jpg";
import carKeyShellsScaled from "./image/Car-Key-Shells-scaled.jpg";
import carBatteryReplacementScaled from "./image/Car-Battery-Replacement-scaled.jpg";
import Box from "@mui/material/Box";

function Table() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        paddingTop: "90px",
        paddingBottom: "90px",
        paddingLeft: "20px",
        paddingRight: "20px",
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={1} direction="row" justifyContent="center" >
        <Grid item md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={toyotaKey}
                alt="toyota key"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  КЛЮЧИ АВТОМОБИЛЯ
                </Typography>
                <Typography variant="body2" color="#000000cc">
                  Мы предлагаем высококачественную замену автомобильных ключей
                  как для автомобилей, требующих транспондерных чипов и пультов
                  дистанционного управления, так и для тех, в которых они не
                  требуются.
                  <br />
                  A great option for a car key with no remote, is a simple
                  emergency key that will manually lock/unlock and start the
                  car. This will avoid the hassle of being stranded after losing
                  the only key for the car.
                  <br />
                  Our look a-like range also offers the customer a reasonably
                  priced car key while keeping the design of the genuine factory
                  key.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={motorbikeKey}
                alt="motorbike key"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  КЛЮЧИ ДЛЯ МОТОЦИКЛА
                </Typography>
                <Typography variant="body2" color="#000000cc">
                  Мы предлагаем высококачественную замену мотоциклетных ключей
                  как для мотоциклов, так и для скутеров, требующих и не
                  требующих чипов транспондера.
                  <br />
                  Наш ассортимент также предлагает покупателю ключ для мотоцикла
                  или скутера по разумной цене, сохраняя при этом дизайн
                  оригинального заводского ключа.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={misterMinit0634Scaled}
                alt="mister minit Scaleda"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Выкидной ключи И дистанционные пульты
                </Typography>
                <Typography variant="body2" color="#000000cc">
                  Мы предлагаем быструю и эффективную услугу по изготовлению и
                  удалению ключей, резке и программированию с использованием
                  новейшего оборудования для дублирования ключей.
                  <br />
                  Мы предлагаем как оригинальные заводские ключи, так и пульты
                  дистанционного управления, а также наш ассортимент
                  высококачественных ключей и пультов дистанционного управления
                  по разумной цене
                  <br />
                  Кроме того, с нашей новой линейкой откидных ключей вы можете
                  интегрировать свой ключ и пульт дистанционного управления в
                  более удобный откидной ключ, доступный в различных забавных
                  цветах.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={proximityKeyScaled}
                alt="proximity key scaled"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Бесконтактный ключ
                </Typography>
                <Typography variant="body2" color="#000000cc">
                  Кнопочный запуск и бесконтактные ключи становятся все более и
                  более распространенными в современных автомобилях. У нас есть
                  оборудование для программирования брелоков для системы
                  транспортных средств.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={carKeyShellsScaled}
                alt="car key shells scaled"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Корпуса для ключей
                </Typography>
                <Typography variant="body2" color="#000000cc">
                  Мы предлагаем широкий ассортимент сменных корпусов / корпусов
                  автомобильных ключей. Если внешний корпус автомобильного ключа
                  поврежден, лезвие сломано или просто изношено со временем,
                  сменная оболочка ключа может быть экономичной альтернативой.
                  <br />
                  Наш мастер удалит все повреждённые детали из оригинального
                  поврежденного автомобильного ключа и поместит их в совершенно
                  новую оболочку, продлившую срок службы оригинального ключа.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={carBatteryReplacementScaled}
                alt="car battery replacement scaled"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Замена батарея и ремонт пульта
                </Typography>
                <Typography variant="body2" color="#000000cc">
                  Мы предлагаем замене аккумуляторов, используем только
                  батарейки Energizer, на которые распространяется гарантия 1
                  год на автомобильные ключи. Ремонт пульта автомобиля (замен
                  кнопки, микросхемы или замен электросхема).
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

function InformationTable() {
  return (
    <Grid 
      container 
      direction="row" 
      justifyContent="center" 
      sx={{
        background: "#f8f9fa", 
        paddingBottom: "90px",
      }}
    >
      <Grid 
        item 
        xs={10} 
        sx={{
          position: "relative", 
          marginTop: "-270px", 
          maxWidth: "1200px !important"
        }}
      >
        <Table />
      </Grid>
    </Grid>
  );
}

export default InformationTable;
