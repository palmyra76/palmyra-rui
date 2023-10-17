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
                "label": "Service Name",
                "required": true,
                "type": "string",
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
                "label": "Server Name",
                "required": true,
                "type": "host",
                "errorMessageType": "Invalid Server Name/IP"
              },
              {
                "attribute": "config.port",
                "label": "Port Number",
                "required": true,
                "type": "port",
                "errorMessageType": "Invalid Port Number"
              },
              {
                "attribute": "config.targetFolder",
                "label": "Target Folder",
                "required": true,
                "type": "folder",
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
                "label": "User Name",
                "required": true,
                "type": "alphabets",
                "errorMessageType": "Only Alphabets are allowed",
                "length": {
                  min: 3,
                  max: 64,
                  message: "Minimum 3 chars, and maximum of 64 chars"
                }
              },
              {
                "attribute": "config.auth.password",
                "label": "Password",
                "required": true,
                "type": "string",
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
                "label": "Base Folder",
                "required": true,
                "type": "folder",
                "errorMessageType": "Invalid Folder",
                "length": {
                  min: 3,
                  max: 50,
                  message: "Minimum 3 chars, and maximum 50 chars"
                }
              },
              {
                "attribute": "config.scanInterval",
                "label": "Scan Interval",
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
                "attribute": "config.fileTransfer",
                "label": "File Transfer",
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
                "label": "Server Name",
                "required": true,
                "type": "host",
                "errorMessageType": "Invalid Server Name/IP"
              },
              {
                "attribute": "config.port",
                "label": "Port Number",
                "required": true,
                "type": "port",
                "errorMessageType": "Invalid Port Number"
              },
              {
                "attribute": "config.targetFolder",
                "label": "Target Folder",
                "required": true,
                "type": "folder",
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
                "label": "User Name",
                "required": true,
                "type": "alphabets",
                "errorMessageType": "Only Alphabets are allowed",
                "length": {
                  min: 3,
                  max: 64,
                  message: "Minimum 3 chars, and maximum of 64 chars"
                }
              },
              {
                "attribute": "config.auth.password",
                "label": "Password",
                "required": true,
                "type": "string",
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
                "label": "Base Folder",
                "required": true,
                "type": "folder",
                "errorMessageType": "Invalid Folder",
                "length": {
                  min: 3,
                  max: 50,
                  message: "Minimum 3 chars, and maximum 50 chars"
                }
              },
              {
                "attribute": "config.scanInterval",
                "label": "Scan Interval",
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
                "label": "Service Name",
                "required": true,
                "type": "string",
                "length": {
                  min: 3,
                  max: 20,
                  message: "Minimum 3 chars, and maximum 20 chars"
                }
              },
              {
                "attribute": "config.fileTransfer",
                "label": "File Transfer",
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
                "label": "Server Name",
                "required": true,
                "type": "host",
                "errorMessageType": "Invalid Server Name/IP"
              },
              {
                "attribute": "config.port",
                "label": "Port Number",
                "required": true,
                "type": "port",
                "errorMessageType": "Invalid Port Number"
              },
              {
                "attribute": "config.targetFolder",
                "label": "Target Folder",
                "required": true,
                "type": "folder",
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
                "label": "User Name",
                "required": true,
                "type": "string",
                "errorMessageType": "Only Alpha-numericals are allowed",
                "length": {
                  min: 3,
                  max: 64,
                  message: "Minimum 3 chars, and maximum of 64 chars"
                }
              },
              {
                "attribute": "config.auth.password",
                "label": "Password",
                "required": true,
                "type": "string",
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
                "label": "Base Folder",
                "required": true,
                "type": "folder",
                "errorMessageType": "Invalid Folder",
                "length": {
                  min: 3,
                  max: 50,
                  message: "Minimum 3 chars, and maximum 50 chars"
                }
              },
              {
                "attribute": "config.scanInterval",
                "label": "Scan Interval",
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