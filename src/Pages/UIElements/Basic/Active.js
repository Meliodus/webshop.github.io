import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Table,
} from "react-bootstrap";

import Aux from "../../../hoc/_Aux";
import Pages from "../../../store/constant";
import avatar1 from "../../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../../assets/images/user/avatar-3.jpg";
import MultiBarChart from "../../Charts/Nvd3Chart/MultiBarChart";

class FormsElements extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          {/* md={6} xl={8} */}

          <Col>
            <Card className="Recent-Users">
              <Card.Header>
                <Card.Title as="h5">Clients</Card.Title>
              </Card.Header>
              <Card.Body className="px-0 py-2">
                <Table responsive hover>
                  <tbody>
                    <tr className="unread">
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          src={avatar1}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                        <h6 className="mb-1">Isabella Doe</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          11 MAY 12:56
                        </h6>
                      </td>
                      <td>
                        <a
                          href={Pages.BLANK_LINK}
                          className="label theme-approved text-white f-12"
                        >
                          Active
                        </a>
                      </td>
                    </tr>
                    <tr className="unread">
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          src={avatar2}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                        <h6 className="mb-1">Mathilde Doe</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          11 MAY 10:35
                        </h6>
                      </td>
                      <td>
                        <a
                          href={Pages.BLANK_LINK}
                          className="label theme-approved text-white f-12"
                        >
                          Active
                        </a>
                      </td>
                    </tr>
                    <tr className="unread">
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          src={avatar3}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                        <h6 className="mb-1">Karla Doe</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          9 MAY 17:38
                        </h6>
                      </td>
                      <td>
                        <a
                          href={Pages.BLANK_LINK}
                          className="label theme-approved text-white f-12"
                        >
                          Active
                        </a>
                      </td>
                    </tr>
                    <tr className="unread">
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          src={avatar1}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                        <h6 className="mb-1">Ida Doe</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted f-w-300">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          19 MAY 12:56
                        </h6>
                      </td>
                      <td>
                        <a
                          href={Pages.BLANK_LINK}
                          className="label theme-approved text-white f-12"
                        >
                          Active
                        </a>
                      </td>
                    </tr>
                    <tr className="unread">
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          src={avatar2}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                        <h6 className="mb-1">Albert Doe</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          21 July 12:56
                        </h6>
                      </td>
                      <td>
                        <a
                          href={Pages.BLANK_LINK}
                          className="label theme-approved text-white f-12"
                        >
                          Active
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default FormsElements;
