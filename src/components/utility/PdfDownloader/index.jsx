import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppIcon from "@material-ui/icons/GetApp";

import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

const MyDoc = ({ item }) => {
  const { description, name, price, quantity, tax, discount, status } = item;

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title} fixed>
          Invoice of {name}
        </Text>
        <Text style={styles.subtitle}>Price</Text>
        <Text style={styles.text}>{price}</Text>
        <Text style={styles.subtitle}>Quantity</Text>
        <Text style={styles.text}>{quantity}</Text>
        <Text style={styles.subtitle}>Tax</Text>
        <Text style={styles.text}>{tax}</Text>
        <Text style={styles.subtitle}>Discount</Text>
        <Text style={styles.text}>{discount}</Text>
        <Text style={styles.subtitle}>Status</Text>
        <Text style={styles.text}>{status}</Text>
        <Text style={styles.subtitle}>Description </Text>
        <Text style={styles.text}>{description}</Text>
      </Page>
    </Document>
  );
};

const PdfDownloader = ({ item }) => {
  const { name } = item;

  return (
    <div>
      <PDFDownloadLink
        document={<MyDoc item={item} />}
        fileName={`${name}.pdf`}
      >
        {({ loading }) =>
          loading ? (
            "Loading document..."
          ) : (
            <Tooltip title="Download pdf">
              <IconButton aria-label="download pdf">
                <GetAppIcon />
              </IconButton>
            </Tooltip>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PdfDownloader;

const styles = {
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
};
