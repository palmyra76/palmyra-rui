const pageLayout = {
  "tabs": [{
    "name": "tab01",
    "sections": [
      {
        "name": "",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "serviceName",
              "title": "Service Name",
              "required": true,
              "type": "string",
              "validationRule": "string",
              "length": {
                min: 3,
                max: 20,
                message: "Minimum 3 chars, and maximum of 20 chars"
              }
            }
          ]
        }
      },
      {
        "name": "Server Details",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "config.serverHost",
              "title": "Server Name",
              "required": true,
              "type": "string",
              "validationRule": ["OR", "ip", "fqdn"],
              "errorMessageType": "Invalid Server Name/IP"
            },
            {
              "attribute": "config.port",
              "title": "Port Number",
              "required": true,
              "type": "string",
              "validationRule": "port",
              "errorMessageType": "Invalid Port Number"
            },
            {
              "attribute": "config.targetFolder",
              "title": "Target Folder",
              "required": true,
              "type": "string",
              "validationRule": "folder",
              "errorMessageType": "Invalid Folder",
              "length": {
                min: 3,
                max: 50,
                message: "Minimum 3 chars, and maximum 50 chars"
              }
            }
          ]
        }
      },
      {
        "name": "Credentials",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "config.auth.userName",
              "title": "User Name",
              "required": true,
              "type": "string",
              "validationRule": "string",
              "errorMessageType": "Invalid User Name",
              "length": {
                min: 3,
                max: 64,
                message: "Minimum 3 chars, and maximum of 64 chars"
              }
            },
            {
              "attribute": "config.auth.password",
              "title": "Password",
              "required": true,
              "type": "string",
              "validationRule": "string",
              "length": {
                min: 3,
                max: 20,
                message: "Minimum 3 chars, and maximum 20 chars"
              }
            }
          ]
        }
      },
      {
        "name": "Local Details",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "config.baseFolder",
              "title": "Base Folder",
              "required": true,
              "type": "string",
              "validationRule": "folder",
              "errorMessageType": "Invalid Folder",
              "length": {
                min: 3,
                max: 50,
                message: "Minimum 3 chars, and maximum 50 chars"
              }
            },
            {
              "attribute": "config.scanInterval",
              "title": "Scan Interval",
              "required": true,
              "type": "select",
              "options": {
                "5": "5 Seconds",
                "10": "10 Seconds",
                "15": "15 Seconds"
              }
            }
          ]
        }
      }
    ]
  }]
};

const ViewPageLayout = {
  "tabs": [{
    "name": "tab01",
    "sections": [
      {
        "name": "",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "serviceName",
              "title": "Service Name",
              "required": true,
              "type": "string",
              "validationRule": "string",
              "length": {
                min: 3,
                max: 20,
                message: "Minimum 3 chars, and maximum of 20 chars"
              }
            },
            {
              "attribute": "config.fileTransfer",
              "title": "File Transfer",
              "required": true,
              "type": "radio",
              "options": {
                "Upload": "Upload Files",
                "Download": "Download Files",
              }
            }
          ]
        }
      },
      {
        "name": "Server Details",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "config.serverHost",
              "title": "Server Name",
              "required": true,
              "type": "string",
              "validationRule": ["OR", "ip", "fqdn"],
              "errorMessageType": "Invalid Server Name/IP"
            },
            {
              "attribute": "config.port",
              "title": "Port Number",
              "required": true,
              "type": "string",
              "validationRule": "port",
              "errorMessage": {
                required: "Mandatory",
                rule: "Invalid Port Number"
              }
            },
            {
              "attribute": "config.targetFolder",
              "title": "Target Folder",
              "required": true,
              "type": "string",
              "validationRule": "folder",
              "errorMessageType": "Invalid Folder",
              "length": {
                min: 3,
                max: 50,
                message: "Minimum 3 chars, and maximum 50 chars"
              }
            }
          ]
        }
      },
      {
        "name": "Credentials",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "config.auth.userName",
              "title": "User Name",
              "required": true,
              "type": "string",
              "validationRule": "string",
              "errorMessageType": "Invalid User Name",
              "length": {
                min: 3,
                max: 64,
                message: "Minimum 3 chars, and maximum of 64 chars"
              }
            },
            {
              "attribute": "config.auth.password",
              "title": "Password",
              "required": true,
              "type": "string",
              "validationRule": "string",
              "length": {
                min: 3,
                max: 20,
                message: "Minimum 3 chars, and maximum 20 chars"
              }
            }
          ]
        }
      },
      {
        "name": "Local Details",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "config.baseFolder",
              "title": "Base Folder",
              "required": true,
              "type": "string",
              "validationRule": "folder",
              "errorMessageType": "Invalid Folder",
              "length": {
                min: 3,
                max: 50,
                message: "Minimum 3 chars, and maximum 50 chars"
              }
            },
            {
              "attribute": "config.scanInterval",
              "title": "Scan Interval",
              "required": true,
              "type": "select",
              "options": {
                "5": "5 Seconds",
                "10": "10 Seconds",
                "15": "15 Seconds"
              }
            }
          ]
        }
      }
    ]
  }]
};

const NewPageLayout = {
  "tabs": [{
    "name": "tab01",
    "sections": [
      {
        "name": "",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "serviceName",
              "title": "Service Name",
              "required": true,
              "type": "string",
              "validationRule": "string",
              "length": {
                min: 3,
                max: 20,
                message: "Minimum 3 chars, and maximum 20 chars"
              }
            },
            {
              "attribute": "config.fileTransfer",
              "title": "File Transfer",
              "required": true,
              "type": "radio",
              "options": {
                "Upload": "Upload Files",
                "Download": "Download Files"
              }
            }
          ]
        }
      },
      {
        "name": "Server Details",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "config.serverHost",
              "title": "Server Name",
              "required": true,
              "type": "string",
              "validationRule": ["OR", "ip", "fqdn"],
              "errorMessageType": "Invalid Server Name/IP"
            },
            {
              "attribute": "config.port",
              "title": "Port Number",
              "required": true,
              "type": "string",
              "validationRule": "port",
              "errorMessageType": "Invalid Port Number"
            },
            {
              "attribute": "config.targetFolder",
              "title": "Target Folder",
              "required": true,
              "type": "string",
              "validationRule": "folder",
              "errorMessageType": "Invalid Folder",
              "length": {
                min: 3,
                max: 50,
                message: "Minimum 3 chars, and maximum 50 chars"
              }
            }
          ]
        }
      },
      {
        "name": "Credentials",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "config.auth.userName",
              "title": "User Name",
              "required": true,
              "type": "string",
              "validationRule": "string",
              "errorMessageType": "Invalid User Name",
              "length": {
                min: 3,
                max: 64,
                message: "Minimum 3 chars, and maximum of 64 chars"
              }
            },
            {
              "attribute": "config.auth.password",
              "title": "Password",
              "required": true,
              "type": "string",
              "validationRule": "string",
              "length": {
                min: 3,
                max: 20,
                message: "Minimum 3 chars, and maximum 20 chars"
              }
            }
          ]
        }
      },
      {
        "name": "Local Details",
        "type": "form",
        "formLayout": {
          "fields": [
            {
              "attribute": "config.baseFolder",
              "title": "Base Folder",
              "required": true,
              "type": "string",
              "validationRule": "folder",
              "errorMessageType": "Invalid Folder",
              "length": {
                min: 3,
                max: 50,
                message: "Minimum 3 chars, and maximum 50 chars"
              }
            },
            {
              "attribute": "config.scanInterval",
              "title": "Scan Interval",
              "required": true,
              "type": "select",
              "options": {
                "5": "5 Seconds",
                "10": "10 Seconds",
                "15": "15 Seconds"
              }
            }
          ]
        }
      }
    ]
  }]
};

const editSftpClientLayout = pageLayout;
const viewSftpClientLayout = ViewPageLayout;
const newSftpClientLayout = NewPageLayout;

export { editSftpClientLayout, viewSftpClientLayout, newSftpClientLayout };