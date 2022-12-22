package com.example.searchpocmaps

import android.content.Context
import android.content.Intent
import android.location.Address
import android.location.Geocoder
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.widget.SearchView
import androidx.core.view.get
import androidx.fragment.app.FragmentActivity
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions
import java.io.IOException
import java.security.AccessController.getContext


class MapsActivity : FragmentActivity(), OnMapReadyCallback {
    private var mMap: GoogleMap? = null

    // creating a variable
    // for search view.
    var searchView: SearchView? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_maps)

        //Set text to textview
        fun gettext(view: View) {
            val textoutput = findViewById<TextView>(R.id.editTextTextPersonName)
            val textinput  = findViewById<SearchView>(R.id.idSearchView);

        }

        //button back to the main screen
        val playButton = findViewById<Button>(R.id.setlocationbutton)
        playButton.setOnClickListener {
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
            val textoutput = findViewById<TextView>(R.id.editTextTextPersonName)
            val textinput = findViewById<SearchView>(R.id.idSearchView)
            textoutput.setText(textinput.query)

        }
        // initializing our search view.
        searchView = findViewById(R.id.idSearchView)

        // Obtain the SupportMapFragment and get notified
        // when the map is ready to be used.
        val mapFragment = supportFragmentManager.findFragmentById(R.id.map) as SupportMapFragment?

        // adding on query listener for our search view.
        searchView?.setOnQueryTextListener(object : SearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(query: String): Boolean {
                // on below line we are getting the
                // location name from search view.
                val location = searchView?.getQuery().toString()
                //Button appears when location is correct
                val playButton = findViewById<Button>(R.id.setlocationbutton)
                playButton.setVisibility(View.VISIBLE);

                // below line is to create a list of address
                // where we will store the list of all address.
                var addressList: List<Address>? = null

                // checking if the entered location is null or not.
                if (location != null || location == "") {
                    // on below line we are creating and initializing a geo coder.
                    val geocoder = Geocoder(this@MapsActivity)
                    try {
                        // on below line we are getting location from the
                        // location name and adding that location to address list.
                        addressList = geocoder.getFromLocationName(location, 1)
                    } catch (e: IOException) {
                        e.printStackTrace()
                    }
                    // on below line we are getting the location
                    // from our list a first position.
                    val address = addressList!![0]

                    // on below line we are creating a variable for our location
                    // where we will add our locations latitude and longitude.
                    val latLng = LatLng(address.latitude, address.longitude)

                    // on below line we are adding marker to that position.
                    mMap!!.addMarker(MarkerOptions().position(latLng).title(location))

                    // below line is to animate camera to that position.
                    mMap!!.animateCamera(CameraUpdateFactory.newLatLngZoom(latLng, 10f))

                }
                return false
            }

            override fun onQueryTextChange(newText: String): Boolean {
                //Button disappears when you remove or change the input
                val playButton = findViewById<Button>(R.id.setlocationbutton)
                playButton.setVisibility(View.INVISIBLE);
                return false
            }
        })
        // at last we calling our map fragment to update.
        mapFragment!!.getMapAsync(this)
    }


    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap
    }
}