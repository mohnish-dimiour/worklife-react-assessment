// ** MUI Imports
import Card from "@mui/material/Card";
import { lighten, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";

// ** Custom Component Imports
import ReactApexcharts from "react-apexcharts";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/material";
import { IconButtonAtom } from "../atoms";

export const CardStatsWithAreaChart = (props) => {
  // ** Props
  const { sx, stats, title, chartSeries, chartColor = "primary" } = props;

  // ** Hook
  const theme = useTheme();

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2.5,
      curve: "smooth",
    },
    grid: {
      show: false,
      padding: {
        top: 2,
        bottom: 17,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityTo: 0,
        opacityFrom: 1,
        shadeIntensity: 1,
        stops: [0, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.4,
              color: theme.palette[chartColor].main,
            },
            {
              offset: 100,
              opacity: 0.1,
              color: theme.palette.background.paper,
            },
          ],
        ],
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: "light",
        shadeIntensity: 1,
        color: theme.palette[chartColor].main,
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
  };

  return (
    <Card sx={{ ...sx }}>
      <CardContent
        sx={{
          pb: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            pb: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ color: grey[700] }} variant="h5">
            {stats}
          </Typography>
          <Typography sx={{ color: grey[600] }} variant="body2">
            {title}
          </Typography>
        </Box>
        <Box>
          <IconButtonAtom
            sx={{
              background: (theme) => lighten(theme.palette.success.main, 0.7),
            }}
            aria-label="delete"
          >
            <SellOutlinedIcon color={"success"} />
          </IconButtonAtom>
        </Box>
      </CardContent>
      <ReactApexcharts
        type="area"
        height={110}
        options={options}
        series={chartSeries}
      />
    </Card>
  );
};
