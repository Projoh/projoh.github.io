package com.example.android.smsapp;

import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.telephony.SmsManager;
import android.text.Editable;
import android.util.Log;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.EditText;
import android.widget.TextView;
import android.provider.ContactsContract;

import com.google.android.gms.appindexing.Action;
import com.google.android.gms.appindexing.AppIndex;
import com.google.android.gms.common.api.GoogleApiClient;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class MainActivity extends AppCompatActivity {
    int NumberOfContactsAdded;
    /**
     * ATTENTION: This was auto-generated to implement the App Indexing API.
     * See https://g.co/AppIndexing/AndroidStudio for more information.
     */
    private GoogleApiClient client;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                sendsms();
                Snackbar.make(view, "Sent!", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
        FloatingActionButton fab2 = (FloatingActionButton) findViewById(R.id.fab2);
        fab2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                AddAllContacts(view);
                Snackbar.make(view, "Added all " + NumberOfContactsAdded + " of your contacts!", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
        // ATTENTION: This was auto-generated to implement the App Indexing API.
        // See https://g.co/AppIndexing/AndroidStudio for more information.
        client = new GoogleApiClient.Builder(this).addApi(AppIndex.API).build();
    }
    String[] thephonenumbers;
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }
    Set<Person> persons = new HashSet<>();
    List<String> phnnumbers = new ArrayList<String>();
    List<String> names = new ArrayList<String>();
    public void addnum(View view) {
        display();
    }

    public void AddAllContacts(View view) {
        try {
            Cursor phones = getContentResolver().query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null, null, null, null);

            while (phones.moveToNext()) {
                String linesp = System.getProperty("line.separator");
                TextView quantityTextView = (TextView) findViewById(R.id.numbersview);
                String name = phones.getString(phones.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME));
                String phoneNumber = phones.getString(phones.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));
                Person person = new Person(name, phoneNumber);
                persons.add(person);
            }
            phones.close();
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
    public void addthistothelist(String nameofperson,String NumberOfPerson) {

        String linesp = System.getProperty("line.separator");
        TextView quantityTextView = (TextView) findViewById(R.id.numbersview);
        String textpost = quantityTextView.getText().toString();
        NumberOfPerson = NumberOfPerson.replaceAll("[^0-9]", "");
        if(NumberOfPerson.contains("+1")) {
            phnnumbers.add(NumberOfPerson);
            names.add(nameofperson);
            NumberOfContactsAdded++;
            quantityTextView.append(linesp+nameofperson+" " +NumberOfPerson);
        } else  {
            NumberOfPerson= "+1"+NumberOfPerson;
            phnnumbers.add(NumberOfPerson);
            names.add(nameofperson);
            NumberOfContactsAdded++;
            quantityTextView.append(linesp+nameofperson+" " +NumberOfPerson);
        }
    }
    public void duplicatecheck(String name,String phoneNumber) {
        for (int i=0;i<phnnumbers.size();i++) {
            String thenumber = phnnumbers.get(i);
            String thename= names.get(i);
        if(thenumber.equals(phoneNumber)) {
                phnnumbers.remove(i);
                names.remove(i);
            TextView quantityTextView = (TextView) findViewById(R.id.numbersview);
            String textpost = quantityTextView.getText().toString();
            String newtextpost = textpost.replaceAll(thenumber, "UNBELIEVABLEEE");
            String secondtextpost = newtextpost.replaceAll(thename, "UNBELIEVABLE");
            quantityTextView.setText(secondtextpost);
            NumberOfContactsAdded--;
            }
        }
    }
    public void RemoveAllContacts(View view) {
        phnnumbers.clear();
        names.clear();
        TextView quantityTextView = (TextView) findViewById(R.id.numbersview);
        quantityTextView.setText("");
    }
    private void display() {

        String linesp = System.getProperty("line.separator");
        // Get the number's view's ID So we can use it
        TextView quantityTextView = (TextView) findViewById(R.id.numbersview);
        // Defines the box where we will grab the numbers
        EditText addnumberfieldbox = (EditText) findViewById(R.id.addnumberfield);
        EditText nameboxtext = (EditText) findViewById(R.id.namebox);
        // Grabs the box's contents and puts it into useable data
        Editable numberfieldEditable = addnumberfieldbox.getText();
        Editable nameboxEditable = nameboxtext.getText();
            // Finally uses the data from the box, and puts it in
        String numberfieldString = numberfieldEditable.toString();
        String nameboxString = nameboxEditable.toString();
        NumberOfContactsAdded++;
        names.add(nameboxString);
        phnnumbers.add(numberfieldString);
        quantityTextView.append(linesp + nameboxString + "  " + numberfieldString);
    }

    public void sendsms() {
        EditText msgbox = (EditText) findViewById(R.id.msg);
        Editable msgwhatsgood = msgbox.getText();
        String whydoesthis = msgwhatsgood.toString();
        for (int i=0;i<phnnumbers.size();i++) {
            String whatslol = phnnumbers.get(i);
            String namesofperson = names.get(i);
            EditText custom3 = (EditText) findViewById(R.id.editTextcustom3);
            Editable custom3grab = custom3.getText();
            EditText custom4 = (EditText) findViewById(R.id.editTextcustom4);
            Editable custom4grab = custom4.getText();
            String custom3grabstring = custom3grab.toString();
            String custom4grabstring = custom4grab.toString();
            String replacingfirst = whydoesthis.replaceAll("NO1", namesofperson);
            String replacingsecond = replacingfirst.replaceAll("NO2", whatslol);
            String replacingthird = replacingsecond.replaceAll("NO3", custom3grabstring);
            String finalreplace = replacingthird.replaceAll("NO4", custom4grabstring);
            SmsManager sms = SmsManager.getDefault();
            sms.sendTextMessage(whatslol, null, finalreplace, null, null);
        }
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onStart() {
        super.onStart();

        // ATTENTION: This was auto-generated to implement the App Indexing API.
        // See https://g.co/AppIndexing/AndroidStudio for more information.
        client.connect();
        Action viewAction = Action.newAction(
                Action.TYPE_VIEW, // TODO: choose an action type.
                "Main Page", // TODO: Define a title for the content shown.
                // TODO: If you have web page content that matches this app activity's content,
                // make sure this auto-generated web page URL is correct.
                // Otherwise, set the URL to null.
                Uri.parse("http://host/path"),
                // TODO: Make sure this auto-generated app deep link URI is correct.
                Uri.parse("android-app://com.example.android.smsapp/http/host/path")
        );
        AppIndex.AppIndexApi.start(client, viewAction);
    }

    @Override
    public void onStop() {
        super.onStop();

        // ATTENTION: This was auto-generated to implement the App Indexing API.
        // See https://g.co/AppIndexing/AndroidStudio for more information.
        Action viewAction = Action.newAction(
                Action.TYPE_VIEW, // TODO: choose an action type.
                "Main Page", // TODO: Define a title for the content shown.
                // TODO: If you have web page content that matches this app activity's content,
                // make sure this auto-generated web page URL is correct.
                // Otherwise, set the URL to null.
                Uri.parse("http://host/path"),
                // TODO: Make sure this auto-generated app deep link URI is correct.
                Uri.parse("android-app://com.example.android.smsapp/http/host/path")
        );
        AppIndex.AppIndexApi.end(client, viewAction);
        client.disconnect();
    }
}
