import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import {
  Button,
  Space,
  Upload,
  Popconfirm,
  Select,
  Switch,
  Row,
  Col,
  Input,
  InputNumber,
  DatePicker,
  message,
  Checkbox,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

import moment from "moment";

const Main: NextPage = () => {
  const [showMap, setShowMap] = useState(false);
  const { Option } = Select;
  const { TextArea } = Input;
  const dateFormat = "DD/MM/YYYY";

  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  function handleShowMap() {
    setShowMap(!showMap);
    console.log(showMap);
  }

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  function onChange(value: any) {
    console.log(`selected ${value}`);
  }

  function onSearch(val: any) {
    console.log("search:", val);
  }
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clique para cancelar");
    setVisible(false);
  };
  return (
    <div>
      <Row justify="center">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h3>Nome do Imóvel</h3>
          <Input style={{ maxWidth: "450px" }} placeholder="Nome..." />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h3>Nome do Imóvel</h3>
          <Input style={{ maxWidth: "450px" }} placeholder="Nome..." />
        </Col>
      </Row>
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <Row>
          <Col span={6}>
            <Checkbox value="Piscina">Piscina</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="AceitaPets">AceitaPets</Checkbox>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Checkbox value="Estacionamento">Estacionamento</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="Salão">Salão</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
      ,
      <Row>
        <Col span={8}>
          <h3>Preço</h3>
          <Space>
            <InputNumber
              style={{ width: 200 }}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
              onChange={onChange}
            />
          </Space>
        </Col>
        <Col span={8}>
          <h3>Selecione as Fotos</h3>
          <Upload>
            <Button>
              <UploadOutlined multiple /> Click to Upload
            </Button>
          </Upload>
        </Col>
        <Col span={8}>
          <h3>Data do cadastro</h3>
          <Space direction="vertical" size={12}>
            <DatePicker
              format={dateFormat}
            />
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <h3>Selecione os espaços</h3>
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Tags Mode"
            onChange={handleChange}
          >
            {/* {children} */}
          </Select>
        </Col>
        <Col span={12}>
          <h3>Selecione o tipo do imóvel</h3>
          <Select
            showSearch
            placeholder="Selecione um tipo"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
          >
            <Option value="apartamento">Apartamento</Option>
            <Option value="casa">Casa</Option>
            <Option value="terreno">Terreno</Option>
          </Select>
        </Col>
      </Row>
      <br />
      <TextArea rows={4} />
      <h3>Exibir mapa</h3>
      <Switch defaultChecked onChange={handleShowMap} />
      <br />
      <br />
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
      ,
      <br />
      <Popconfirm
        title="Confirmar cadastro do imóvel"
        visible={visible}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
        okText="Sim"
        cancelText="Cancelar"
      >
        <Button type="primary" onClick={showPopconfirm}>
          Deseja realmente cadastrar esse imóvel?
        </Button>
      </Popconfirm>
    </div>
  );
};

export default Main;
